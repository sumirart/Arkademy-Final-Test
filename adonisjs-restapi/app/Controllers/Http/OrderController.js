'use strict'

const Order = use('App/Models/Order')
class OrderController {
    async index({ response }) {
        let orders = await Order.all()

        return response.json(orders)
    }

    // async show({ params, response }) {
    //     const order = await Order.find(params.id)

    //     return response.json(order)
    // }

    async store({ request, response }) {
        const orderInfo = request.only(['product_id', 'qty', 'price', 'transaction_id'])

        const order = new Order()
        order.product_id = orderInfo.product_id
        order.qty = orderInfo.qty
        order.price = orderInfo.price
        order.transaction_id = orderInfo.transaction_id

        await order.save()

        return response.status(201).json(order)
    }

    async update({ params, request, response }) {
        const orderInfo = request.only(['product_id', 'qty', 'price', 'transaction_id'])

        const order = await Order.find(params.id)
        if (!order) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        order.product_id = orderInfo.product_id
        order.qty = orderInfo.qty
        order.price = orderInfo.price
        order.transaction_id = orderInfo.transaction_id

        await order.save()

        return response.status(200).json(order)
    }

    async patch({ params, request, response }) {
        const orderInfo = request.only(['product_id', 'qty', 'price', 'transaction_id'])

        const order = await Order.find(params.id)
        if (!order) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        order.product_id = orderInfo.product_id
        order.qty = orderInfo.qty
        order.price = orderInfo.price
        order.transaction_id = orderInfo.transaction_id

        await order.save()

        return response.status(200).json(order)
    }

    async delete({ params, response }) {
        const order = await Order.find(params.id)
        if (!order) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        await order.delete()

        return response.status(204).json(null)
    }
}

module.exports = OrderController