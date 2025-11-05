from .models import Category, Dish, TeamMember, GalleryImage
from .serializers import (
    CategorySerializer,
    DishSerializer,
    TeamMemberSerializer,
    GalleryImageSerializer,
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = "slug"

class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by("order")
    serializer_class = TeamMemberSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all().order_by("order")
    serializer_class = GalleryImageSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]