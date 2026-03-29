from rest_framework import serializers
from .models import Category, Product

class SerializerCategory(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class SerializerProduct(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
