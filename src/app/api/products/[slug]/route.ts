import { z } from 'zod'
import data from '../data.json'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // primeiro aguardamos o params
  const { slug } = await params
  // validamos com zod
  z.string().parse(slug)

  // simula delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const product = data.products.find((p) => p.slug === slug)
  if (!product) {
    return Response.json(
      { message: 'Product not found.' },
      { status: 400 }
    )
  }

  return Response.json(product)
}
