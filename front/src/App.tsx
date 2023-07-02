import { Button, Grid, TextField } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IProducts from "./models/products.model";
import IBuyer from "./models/buyer.model";
import { getProducts, getBuyer } from "./app.service";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [buyer, setBuyer] = useState<IBuyer>();

  useEffect(() => {
    loadBuyer();
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };
  const loadBuyer = async () => {
    const response = await getBuyer();
    setBuyer(response);
    console.log("buyer", response);
  };

  const addItemToCart = (product: IProducts) => {
    console.log("product", product);
    return;
  };

  return (
    <>
      <Grid container>
        <Grid item className="products" xs={4}>
          <Grid container>
            <Grid container>
              <h1>Products</h1>
              <AddCircleIcon />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Grid>
            <Grid className="table" container>
              {products.map((product, index) => (
                <Grid container key={index}>
                  <Grid item xs={10}>
                    <span> {product.name}</span>
                  </Grid>
                  <Grid item xs={2}>
                    <div
                      onClick={() => {
                        addItemToCart(product);
                      }}
                    >
                      <PlayCircleFilledIcon />
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="buyer" xs={4}>
          <Grid>
            <h1>Buyer</h1>
          </Grid>
          <Grid className="table" container>
            {buyer?.cart?.items
              ? buyer.cart.items.map((item, index) => (
                  <Grid container key={index}>
                    <Grid item xs={8}>
                      <span> {item?.product?.name ?? "-"}</span>
                    </Grid>
                    <Grid item xs={4}>
                      <PlayCircleFilledIcon />
                      <span>{item.qt}</span>
                      <PlayCircleFilledIcon />
                    </Grid>
                  </Grid>
                ))
              : null}
          </Grid>
          <Grid container>
            <span>Total: 15.00</span>
            <Button variant="contained">Send Order</Button>
          </Grid>
        </Grid>
        <Grid item className="duties" xs={4}>
          <Grid container>
            <h1>Duties</h1>
            <AddCircleIcon />
          </Grid>
          <Grid className="table" container>
            {products.map((product, index) => (
              <Grid container key={index}>
                <Grid item xs={10}>
                  <span> {product.name}</span>
                </Grid>
                <Grid item xs={2}>
                  <PlayCircleFilledIcon />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
