var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'https://d28dwf34zswvrl.cloudfront.net/wp-content/uploads/2016/08/125-fall-in-love.png',
        title: 'This is one',
        discription: 'Awesome Game!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.accounting-coach.com/wp-content/uploads/2016/12/product.jpg',
        title: 'This is otwo',
        discription: 'Amet sint tempor enim cupidatat.',
        price: 20
    }),
    new Product({
        imagePath: 'https://www.gs1us.org/portals/0/Images/02_UPCs_Barcodes_and_Prefixes/02-1-2_Choose_Product_GTIN_or_Location_GLN_Identification/02-1-2-module-data-hub-product-video@1x.png',
        title: 'This is three',
        discription: 'Amet sint tempor enim cupidatat.Amet sint tempor enim cupidatat.Amet sint tempor enim cupidatat.',
        price: 30
    }),
    new Product({
        imagePath: 'https://www.acesled.com/wp-content/uploads/2015/01/Prod02.png',
        title: 'This is one fi',
        discription: 'Amet sint tempor enim cupidatat.Amet sint tempor enim cupidatat.Amet sint tempor enim cupidatat.',
        price: 40
    }), new Product({
        imagePath: 'https://www.acesled.com/wp-content/uploads/2015/01/Prod02.png',
        title: 'one fi',
        discription: 'Amet sint tempor enim cupidatat.',
        price: 50
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        if (err)
            console.log(err);
        done++;
        if (done === products.length) {
            console.log('saved');
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}