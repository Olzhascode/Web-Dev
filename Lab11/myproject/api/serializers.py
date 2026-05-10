from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):

    extra_info = serializers.SerializerMethodField(read_only=True)

    class Meta:
        fields = ['title', 'price']

