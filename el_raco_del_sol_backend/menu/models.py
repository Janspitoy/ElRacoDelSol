from django.db import models
from django.utils.text import slugify
from django.db import models
from PIL import Image


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="categories/", blank=True, null=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Dish(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="dishes")
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="dishes/", blank=True, null=True)
    is_available = models.BooleanField(default=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.category.name})"


class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    photo = models.ImageField(upload_to="team/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    # social links
    instagram = models.URLField(blank=True, null=True)
    facebook  = models.URLField(blank=True, null=True)
    linkedin  = models.URLField(blank=True, null=True)
    twitter   = models.URLField(blank=True, null=True)
    tiktok    = models.URLField(blank=True, null=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.order}. {self.name} — {self.role}"

class GalleryImage(models.Model):
    title = models.CharField(max_length=120, blank=True)
    image = models.ImageField(upload_to="gallery/")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]
        verbose_name = "Gallery Image"
        verbose_name_plural = "Gallery Images"

    def __str__(self):
        return self.title or f"Imagen {self.id}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.image:
            img_path = self.image.path
            with Image.open(img_path) as img:
                img = img.convert("RGB")

                # === ШАГ 1: кадрирование (crop) до нужного соотношения сторон ===
                target_ratio = 612 / 560
                width, height = img.size
                current_ratio = width / height

                if current_ratio > target_ratio:
                    # Изображение слишком широкое → обрезаем по бокам
                    new_width = int(height * target_ratio)
                    left = (width - new_width) // 2
                    right = left + new_width
                    top = 0
                    bottom = height
                else:
                    # Изображение слишком высокое → обрезаем сверху и снизу
                    new_height = int(width / target_ratio)
                    top = (height - new_height) // 2
                    bottom = top + new_height
                    left = 0
                    right = width

                img = img.crop((left, top, right, bottom))

                # === ШАГ 2: изменение размера до 612×560 ===
                img = img.resize((612, 560), Image.Resampling.LANCZOS)

                # === ШАГ 3: сохранение с оптимизацией ===
                img.save(img_path, quality=90, optimize=True)
