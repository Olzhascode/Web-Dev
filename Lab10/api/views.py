from .models import Category, Product
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import SerializerCategory, SerializerProduct

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all() 
    serializer_class = SerializerCategory 

    @action(detail=True, methods=['get']) 
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category) 
        serializer = SerializerProduct(products, many=True) 
        return Response(serializer.data) 

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = SerializerProduct