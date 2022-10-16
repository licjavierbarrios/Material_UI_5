import React, { useState } from "react";
import { Liquor, Mail, Notifications } from "@mui/icons-material";
import {
	AppBar,
	Toolbar,
	styled,
	Typography,
	Box,
	InputBase,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 15px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const bebidas = [
	{ label: "Cola" },
	{ label: "Cola sin azúcar" },
	{ label: "Guaraná" },
	{ label: "Lima limón" },
	{ label: "Manzana" },
	{ label: "Naranja" },
	{ label: "Pomelo amarillo" },
	{ label: "Pomelo blanco" },
	{ label: "Pomelo rosa" },
	{ label: "Uva" },
	{ label: "Soda" },
	{ label: "Citrus" },
	{ label: "Naranja durazno" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Coorp Inc
				</Typography>
				<Liquor sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="Search..." />
				</Search>

				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar
						sx={{ with: 30, height: 40 }}
						src="https://scontent.firj1-1.fna.fbcdn.net/v/t1.18169-9/17309381_992465830886914_6456022277129432094_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=lt1JM6Q6zMIAX8Ywhy_&tn=LZ0DHwnsfmBQva2C&_nc_ht=scontent.firj1-1.fna&oh=00_AT9jumHWqZtLC2l20B0emMWso3JXky6WMpu5NA73tXho7A&oe=63723492"
						onClick={() => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={() => setOpen(true)}>
					<Avatar
						sx={{ with: 30, height: 40 }}
						src="https://scontent.firj1-1.fna.fbcdn.net/v/t1.18169-9/17309381_992465830886914_6456022277129432094_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=lt1JM6Q6zMIAX8Ywhy_&tn=LZ0DHwnsfmBQva2C&_nc_ht=scontent.firj1-1.fna&oh=00_AT9jumHWqZtLC2l20B0emMWso3JXky6WMpu5NA73tXho7A&oe=63723492"
					/>
					<Typography variant="span">Maxy Barrios</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={() => setOpen(false)}
				anchorEl={document.querySelector("body")}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
