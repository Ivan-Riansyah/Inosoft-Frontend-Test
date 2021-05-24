<template>
  <div class="tableB">
    <div class="container w-90">
      <div class="row justify-content-center">
        <div class="col-auto">
          <table class="table table-sm">
            <thead class="thead-light">
              <th width="12%" scope="col">Description</th>
              <th width="8%" scope="col">Qty</th>
              <th width="8%" scope="col">UOM</th>
              <th width="10%" scope="col">Unit Price</th>
              <th width="8%" scope="col">Discount(%)</th>
              <th width="8%" scope="col">VAT(%)</th>
              <th width="8%" scope="col">Currency</th>
              <th width="10%" scope="col">VAT Amount</th>
              <th width="8%" scope="col">Sub Total</th>
              <th width="5%" scope="col">Total</th>
              <th scope="col">Charge To</th>
              <th scope="col"></th>
            </thead>
            <tr v-for="(post, k) in posts" :key="k">
              <td>
                <input class="form-control" type="text" v-model="post.description" />
              </td>
              <td>
                <input class="form-control" type="text" v-model="post.qty" />
              </td>
              <td>
                <select class="form-control">
                  <option v-for="option in post.uom.option" :key="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </td>
              <td>
                <input class="form-control" type="text" v-model="post.unitPrice" />
              </td>
              <td>
                <input class="form-control" type="text" v-model="post.discount" />
              </td>
              <td>
                <input class="form-control" type="text" v-model="post.vat" />
              </td>
              <td>
                <select class="form-control">
                  <option v-for="option in post.currency.option" :key="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </td>
              <td>
                <input readonly class="form-control" type="text" v-model="post.vatAmount" />
              </td>
              <td>
                <input readonly class="form-control" type="text" v-model="post.subTotal" />
              </td>
              <td>
                <input readonly class="form-control" type="text" v-model="post.total" />
              </td>
              <td>
                <select class="form-control">
                  <option v-for="option in post.chargeTo.option" :key="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </td>
              <td scope="row" class="trashIconContainer">
                <i class="far fa-trash-alt" @click="deleteRow(k, post)"></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- <h1 v-for="(item, index) in posts" :key="index">{{ item.title }}</h1> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "tableB",
  // data() {
  //   return {
  //     invoice_products: [
  //       {
  //         description: "",
  //         qty: "",
  //         uom: "",
  //         unitPrice: "",
  //         discount: 0,
  //         vat: 0,
  //         currency: "",
  //         vatAmount: 0,
  //         subTotal: 0,
  //         total: 0,
  //         charge: "",
  //       },
  //     ],
  //     uom: [{ name: "SHP" }, { name: "ABC" }],
  //     currency: [{ name: "USD" }, { name: "AED" }],
  //     chargeTo: [{ name: "option1" }, { name: "option2" }]
  //   };
  // },
  mounted(){
      //console.log(this.$parent.invoice_products);
      this.$store.dispatch('posts/loadPosts');
  },
  computed: {
      ...mapState('posts', ['posts'])
  }
};
</script>