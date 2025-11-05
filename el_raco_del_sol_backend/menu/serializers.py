from rest_framework import serializers
from .models import Category, Dish, TeamMember, GalleryImage

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    dishes = DishSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ["id","name","slug","description","image","dishes"]


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = "__all__"


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = "__all__"
