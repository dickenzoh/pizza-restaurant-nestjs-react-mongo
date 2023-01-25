import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MultipleSelectChip from "./Modal";
import {
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import { createOrder } from "../../features/order/orderSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "25%",
  left: "45%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  m: 10,
};

export default function NewOrderModal() {
  const [open, setOpen] = React.useState(false);
  const [pizzaName, setPizzaName] = React.useState("");
  const [pizzaToppings, setPizzaToppings] = React.useState([]);
  const [postData, setPostData] = React.useState({
    orders: {
      name: "",
      toppings: [],
      status: "completed",
      duration: 10,
    },
    createdAt: 11,
    status: "completed",
    preptime: {
      dough: 10,
      toppings: 20,
      oven: 30,
      waiter: 40,
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const clearForm = () => {
    setPostData({
      orders: {
        name: "",
        toppings: [],
        status: "",
        duration: "",
      },
      createdAt: "",
      status: "",
      preptime: {
        dough: "",
        toppings: "",
        oven: "",
        waiter: "",
      },
    });
  };

  const handleAddToCart = (e) => {
    console.log("added to cart");
    setPostData({
      orders: {
        name: pizzaName,
        toppings: pizzaToppings,
        status: "",
        duration: "",
      },
      createdAt: "",
      status: "",
      preptime: {
        dough: "",
        toppings: "",
        oven: "",
        waiter: "",
      },
    });
    dispatch(createOrder(postData));
    dispatch(handleClose());
    //dispatch(clearForm());
  };

  console.log(pizzaName);
  console.log(pizzaToppings);
  console.log(postData);

  return (
    <div>
      <Button onClick={handleOpen}>Add New Pizza</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create your pizza
            </Typography>
            <FormControl fullWidth sx={{ mt: "30px" }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Pizza Name
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                onChange={(event) => setPizzaName(event.target.value)}
                inputProps={{
                  name: "orders.name",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"Neapolitan Pizza"}>Neapolitan Pizza</option>
                <option value={"Chicago Pizza"}>Chicago Pizza</option>
                <option value={"New York-Style Pizza"}>
                  New York-Style Pizza
                </option>
                <option value={"Sicilian Pizza"}>Sicilian Pizza</option>
              </NativeSelect>
              <Typography
                sx={{ mt: "30px" }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Select toppings
              </Typography>
              <MultipleSelectChip
                pizzaToppings={pizzaToppings}
                setPizzaToppings={setPizzaToppings}
              />
              <Button
                sx={{ mt: "20px", borderRadius: "10px" }}
                variant="contained"
                size="small"
                onClick={handleAddToCart}
              >
                Add
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
