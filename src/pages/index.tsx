import type { NextPage } from 'next'
import { Box, Container, Link, Typography } from '@mui/material'
import { Copyright } from '../components/Copyright/Copyright'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
	const router = useRouter()
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4" component="h1" gutterBottom>
					MUI v5 + Next.js with TypeScript Boilerplate
				</Typography>
				<Link color="secondary" variant="h6" href="https://g4educacao.com/">
					Go to G4 Educação
				</Link>
				<Copyright />
			</Box>
		</Container>
	)
}

export default Home
