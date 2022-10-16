import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed" width={300}>
				<Typography variant="h6" fontWeight={100} >
					Online Friends
				</Typography>
				<AvatarGroup max={7}>
					<Avatar
						alt="Remy Sharp"
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
					/>
					<Avatar
						alt="Amanda Wallet"
						src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
					/>
					<Avatar
						alt="Agata Crist"
						src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
					/>
				</AvatarGroup>
				<Typography variant="h6" fontWeight={100}>
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100} gap={5}>
					<img
						src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__180.jpg"
						alt="Remy Sharp"
					/>
					<img
						src="https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417__180.jpg"
						alt="Remy Sharp"
					/>
					<img
						src="https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701__180.jpg"
						alt="Remy Sharp"
					/>
				</ImageList>
				<Typography variant="h6" fontWeight={100} >
					Lates Conversetions
				</Typography>
				<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Remy Sharp"
								src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Travis Howard"
								src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Cindy Baker"
								src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Rightbar;
