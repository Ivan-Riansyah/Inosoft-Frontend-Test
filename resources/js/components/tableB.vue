<template>
  <div class="tableB">
    <div class="container-fluid container-table">
      <div class="cost-detail">
        <h3>Cost Detail</h3>
        <i class="fas fa-angle-down fa-2x"></i>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <table class="table table-sm content-table">
            <thead class="thead-light">
              <th width="12%" scope="col">Description</th>
              <th width="8%" scope="col">Qty</th>
              <th width="8%" scope="col">UOM</th>
              <th width="8%" scope="col">Unit Price</th>
              <th width="8%" scope="col">Discount(%)</th>
              <th width="8%" scope="col">VAT(%)</th>
              <th width="3%" scope="col"></th>
              <th width="8%" scope="col">Currency</th>
              <th width="8%" scope="col">VAT Amount</th>
              <th width="8%" scope="col">Sub Total</th>
              <th width="5%" scope="col">Total</th>
              <th scope="col">Charge To</th>
              <th width="3%" scope="col"></th>
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
              <td scope="row" class="align-middle iconContainer">
                <i class="fas fa-arrow-right fa-2x"></i>
              </td>
              <td>
                <select class="form-control">
                  <option v-for="option in post.currency.option" :key="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </td>
              <td class="align-middle text-center">
                <!-- <input readonly class="form-control" type="text" v-model="post.vatAmount" /> -->
                {{parseFloat(post.vatAmount).toFixed(2)}}
              </td>
              <td class="align-middle text-center">
                {{parseFloat(post.subTotal).toFixed(2)}}
              </td>
              <td class="align-middle text-center">
                {{parseFloat(post.total).toFixed(2)}}
              </td>
              <td>
                <select class="form-control">
                  <option v-for="option in post.chargeTo.option" :key="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </td>
              <td scope="row" class="iconContainer">
                <i class="fas fa-minus-square fa-3x" @click="deleteRow(k, post)"></i>
              </td>
            </tr>
            <tr>
              <td colspan="7" rowspan="2" class="align-middle">Exchange Rate 1 USD=  3.675 AED</td>
              <td class="grey-col">AED in Total</td>
              <td class="grey-col"></td>
              <td class="grey-col"></td>
              <td class="grey-col"></td>
              <td rowspan="2"></td>
              <td rowspan="2" class="align-middle iconGreen">
                <i class="fas fa-plus-square fa-3x" @click="addNewRow"></i>
              </td>
            </tr>
            <tr>
              <td class="grey-col">USD in Total</td>
              <td class="grey-col"></td>
              <td class="grey-col"></td>
              <td class="grey-col"></td>
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
  mounted(){
      //console.log(this.$parent.invoice_products);
      this.$store.dispatch('posts/loadPosts');
  },
  computed: {
      ...mapState('posts', ['posts'])
  },
  methods:{
    addNewRow(){
      this.posts.push({
        description: '',
        qty: '',
        uom: {
          option: [{name: 'SHP'}, {name: 'ABC'}]
        },
        unitPrice: '',
        discount: 0,
        vat: 0,
        currency: {
          option: [{name: 'USD'}, {name: 'AED'}]
        },
        vatAmount: 0,
        subTotal: 0,
        total: 0,
        chargeTo: {
          option: [{name: 'opsi 1'}, {name: 'opsi 2'}]
        }
      })
    },
    deleteRow(index, post){
      var idx = this.posts.indexOf(post);
      console.log(idx, index);
      if(idx > -1) {
        this.posts.splice(idx, 1);
      }
      //this.calculateTotal();
    }
  }
};
</script>

<style lang="css" scoped>
    @import "../../css/app.css";
</style>    