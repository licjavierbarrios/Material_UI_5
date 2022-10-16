import React, { useState } from "react";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	styled,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import {
	Add as Agregar,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={() => setOpen(true)}
				title="Add Post"
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "calc(50% - 25px)", sm: 70 },
				}}
			>
				<Fab color="primary" aria-label="add">
					<Agregar />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>
					<UserBox>
						<Avatar
							alt="Maxy Barrios"
							src="https://media-exp1.licdn.com/dms/image/C5603AQEbVMmO0DV9Xg/profile-displayphoto-shrink_100_100/0/1516874758565?e=1671667200&v=beta&t=FW63CjatQhtiJqfxLkj9cg6_IjGnzssaK6YZPynNVI4"
						/>
						<Typography variant="span" fontWeight={500}>
							Maxy Barrios
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>
					<ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
						<Button>Post</Button>
						<Button sx={{width: "100px"}}>
                            <DateRange  />
                        </Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
