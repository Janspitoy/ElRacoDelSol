from django.contrib import admin
from .models import Category, Dish, TeamMember

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "is_available")
    list_filter = ("category", "is_available")
    search_fields = ("name", "description")

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ("order", "name", "role")
    ordering = ("order",)
    fieldsets = (
        (None, {"fields": ("order","name","role","description","photo")}),
        ("Social Links", {"fields": ("instagram","facebook","linkedin","twitter","tiktok"), "classes": ("collapse",)}),
    )
