from rest_framework import serializers
from .models import Category, Item


class HandleSerializer(serializers.Serializer):
        id = serializers.IntegerField(read_only=True)
        name = serializers.CharField(max_length=255)
        price = serializers.DecimalField(max_digits=10, decimal_places=2)

        def create(self, validated_data):
                return Item.objects.create(**validated_data)
        
        def update(self, instance, validated_data):
                instance.name = validated_data.get('name', instance.name)
                instance.price = validated_data.get('price', instance.price)
                instance.save()
                return instance 


class CategorySerializer(serializers.ModelSerializer):
        class Meta:
                model = Category
                fields = '__all__'