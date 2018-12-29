'use strict'

const Transaction = use('App/Models/Transaction')
class TransactionController {
    // async index({ response }) {
    //     let transactions = await Transaction.all()

    //     return response.json(transactions)
    // }

    async show({ params, response }) {
        const transaction = await Transaction.find(params.id)

        return response.json(transaction)
    }

    async store({ request, response }) {
        const transactionInfo = request.only(['total'])

        const transaction = new Transaction()
        transaction.total = transactionInfo.total

        await transaction.save()

        return response.status(201).json(transaction)
    }

    // async update({ params, request, response }) {
    //     const transactionInfo = request.only(['total'])

    //     const transaction = await Transaction.find(params.id)
    //     if (!transaction) {
    //         return response.status(404).json({ data: 'Resource not found' })
    //     }
    //     transaction.total = transactionInfo.total

    //     await transaction.save()

    //     return response.status(200).json(transaction)
    // }

    // async delete({ params, response }) {
    //     const transaction = await Transaction.find(params.id)
    //     if (!transaction) {
    //         return response.status(404).json({ data: 'Resource not found' })
    //     }
    //     await transaction.delete()

    //     return response.status(204).json(null)
    // }
}

module.exports = TransactionController