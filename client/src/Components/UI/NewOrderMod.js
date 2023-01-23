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

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const [postData, setPostData] = React.useState({
    name: "",
    toppings: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    dispatch(handleClose());
    dispatch(createOrder(postData));
    dispatch(
      setPostData({
        name: "",
        toppings: "",
      })
    );
  };

  console.log(postData);

  return (
    <div>
      <Button onClick={handleOpen}>Add New Order</Button>

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
              Create an Order
            </Typography>
            <FormControl fullWidth sx={{ mt: "30px" }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Pizza Name
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                onChange={(event) =>
                  setPostData({
                    ...postData,
                    name: event.target.value,
                  })
                }
                inputProps={{
                  name: "name",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Neapolitan Pizza</option>
                <option value={20}>Chicago Pizza</option>
                <option value={30}>New York-Style Pizza</option>
                <option value={40}>Sicilian Pizza</option>
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
                postData={postData}
                setPostData={setPostData}
              />
              <Button
                sx={{ mt: "20px" }}
                variant="contained"
                size="small"
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
