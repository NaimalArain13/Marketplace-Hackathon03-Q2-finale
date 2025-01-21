import { Rule } from '@sanity/types';
export default {
    name: 'watchPerfumes',
    title: 'watchPerfumes',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule:Rule)=> Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule:Rule)=> Rule.max(500),
      },
      {
        name: 'moreDetails',
        title: 'More Details',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule:Rule)=> Rule.min(0).required(),
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
        validation:(Rule:Rule) => Rule.min(0).max(100),
      },
      {
        name: 'priceWithoutDiscount',
        title: 'Price Without Discount',
        type: 'number',
        validation: (Rule:Rule) => Rule.min(0).required(),
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule:Rule) => Rule.min(0).max(5),
      },
      {
        name: 'ratingCount',
        title: 'Rating Count',
        type: 'number',
        validation: (Rule:Rule) => Rule.min(0),
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags', // Optional: Makes it user-friendly for input
        },
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string'
      },
      {
        name: 'stock_Quantity',
        title: 'Stock Quantity',
        type: 'number'
      },
      {
        name: 'brand',
        title: 'Brand',
        type: 'string',
      },
      {
        name: 'sku',
        title: 'SKU',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
    ],
  };