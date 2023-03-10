import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MultipleSelectChip from "./Modal";
import {
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  NativeSelect,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  m: 10,
};

export default function ReportModal({ reportItem }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(reportItem);
  console.log(reportItem.orders);

  return (
    <div>
      <Button onClick={handleOpen}>Report</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Order Id: {reportItem.id}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Created at: {reportItem.createdAt}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Peparation Time: {reportItem.duration}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Completed at: {reportItem.completedAt}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Number of Pizzas: {reportItem.completedAt}
            </Typography>

            <Box
              sx={{
                py: "25px",
              }}
            >
              <Divider style={{ backgroundColor: "#6605B8" }} />
            </Box>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Pizza List
            </Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {reportItem.orders.map((order) => {
                <ListItem>
                  <ListItemText
                    primary={order.name}
                    secondary={order.toppings.map((item) => {
                      console.log(item);
                    })}
                  />
                </ListItem>;
              })}
            </List>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
