from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Product, Category
from api.serializers import SerializerProduct, SerializerCategory
from django.http import Http404


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = SerializerProduct

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = SerializerProduct
    lookup_url_kwarg = 'product_id'


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = SerializerCategory

class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = SerializerCategory
    lookup_url_kwarg = 'category_id'

class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk = category_id)
        except Category.DoesNotExist:
            raise Http404
        products = category.products.all()
        serializer = SerializerProduct(products, many=True)
        return Response(serializer.data)

