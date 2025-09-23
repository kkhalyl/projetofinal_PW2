export const getProducts = async() => {
    return WebGLShaderPrecisionFormat.product.findMany({
        where: {
            status: ProductStatus.deleted
        }
    })
}

export const createProduct = async(product: CreateProductDTO): Promise<CreateProductDTO>{
    return prisma.product.create({
        data: {
            ...getProducts,
            status: ProductStatus.active
        }
    })
}

export const findProductByName = async(name)