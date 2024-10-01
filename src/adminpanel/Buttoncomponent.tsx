import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";

const ITEM_HEIGHT = 48;

type ButtonComponentProps = {
  setProduct: (product: any) => void;
  setShow: (show: boolean) => void;
  product: any;
  handleDelete: (product: any) => Promise<void> // Add delete function prop
};

export default function ButtonComponent({
  setProduct,
  setShow,
  product,
  handleDelete,
}: ButtonComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const confirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(product); // Call the delete function if confirmed
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon
          icon="bi:three-dots-vertical"
          width="26"
          height="26"
          style={{ color: "#878787" }}
        />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setShow(true); // Call setShow from parent component
            setProduct(product); // Pass the product to the parent component
            handleClose();
          }}
        >
          Edit <Icon className="mx-2" icon="bi:pencil-square" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            confirm();
          }}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.1)", // Light red background on hover
              color: "#d32f2f", // Dark red text color on hover
            },
          }}
        >
          Delete <Icon className="mx-2" icon="bi:trash" />
        </MenuItem>
      </Menu>
    </div>
  );
}
