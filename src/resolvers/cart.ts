import "reflect-metadata";
import { Cart, Product } from "@models";
import { CartService } from "@services";
import { Resolver, Query, Arg, Ctx, Mutation } from "type-graphql";
import { Inject, Service } from "typedi";

@Service()
@Resolver()
export default class ProductResolver {
  constructor(
    @Inject("CartService") private readonly cartService: CartService
  ) {}

  @Query(() => [Cart])
  async getCarts() {
    return this.cartService.getAllCarts();
  }

  @Query(() => Cart)
  async getCartByID(@Arg("id") id: string, @Ctx() ctx: any) {
    return this.cartService.getCartById(id);
  }

  @Mutation(() => Cart)
  async createEmptyCart() {
    return this.cartService.createEmptyCart();
  }

  @Mutation(() => Cart)
  async addProductToCart(
    @Arg("id") id: string,
    @Arg("product_id") product_id: string,
    @Ctx() ctx: any
  ) {
    return this.cartService.addProductToCart(id, product_id);
  }

  @Mutation(() => Cart)
  async deleteProductFromCart(
    @Arg("id") id: string,
    @Arg("product_id") product_id: string,
    @Ctx() ctx: any
  ) {
    return this.cartService.deleteProductFromCart(id, product_id);
  }

  @Mutation(() => Cart)
  async decrementProductFromCart(
    @Arg("id") id: string,
    @Arg("product_id") product_id: string,
    @Ctx() ctx: any
  ) {
    return this.cartService.decrementProductFromCart(id, product_id);
  }

  @Mutation(() => Cart)
  async emptyCart(@Arg("id") id: string, @Ctx() ctx: any) {
    return this.cartService.emptyCart(id);
  }
}
