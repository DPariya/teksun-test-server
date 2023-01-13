var express = require("express");
var router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

/* GET users listing. */
router.post("/", async function (req, res, next) {
  const customer = await stripe.customers.create({
    email: "name545cb6df-7d02-4426-bcba-cd278a940a50@test.com",
    address: {
      city: "Rajkot",
      country: "IN",
      line1: "1 Shiva Ganga",
      state: "GJ",
    },
    name: "Test Teksun",
  });

  res.json({
    status: true,
    data: customer,
  });
});

module.exports = router;
