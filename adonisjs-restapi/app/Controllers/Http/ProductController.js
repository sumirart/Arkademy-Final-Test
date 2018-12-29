'use strict'

const Product = use('App/Models/Product')
class ProductController {
    async index({ response }) {
        let products = await Product.all()

        return response.json(products)
    }

    async show({ params, response }) {
        const product = await Product.find(params.id)

        return response.json(product)
    }

    async store({ request, response }) {
        const productInfo = request.only(['name', 'price', 'image_url'])

        const product = new Product()
        product.name = productInfo.name
        product.price = productInfo.price
        product.image_url = productInfo.image_url

        await product.save()

        return response.status(201).json(product)
    }

    async update({ params, request, response }) {
        const productInfo = request.only(['name', 'price', 'image_url'])

        const product = await Product.find(params.id)
        if (!product) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        product.name = productInfo.name
        product.price = productInfo.price
        product.image_url = productInfo.image_url

        await product.save()

        return response.status(200).json(product)
    }

    async delete({ params, response }) {
        const product = await Product.find(params.id)
        if (!product) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        await product.delete()

        return response.status(204).json(null)
    }
}

module.exports = ProductController