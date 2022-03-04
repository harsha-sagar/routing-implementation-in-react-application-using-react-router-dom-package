import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './components/AuthProvider';
import { Login } from './components/Login';
import { Profile } from './components/Profile';

import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { AdminUser } from './components/AdminUser';
import { RequireAuth } from './components/RequireAuth';
import { NoMatch } from './components/NoMatch';

const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route 
					path="about" 
					element={
						<React.Suspense fallback="Loading...">
							<LazyAbout />
						</React.Suspense>
					} 
				/>
				<Route path="order-summary" element={<OrderSummary />} />
				<Route path="products" element={<Products />} >
					<Route index element={<FeaturedProducts />} />
					<Route path="featured" element={<FeaturedProducts />} />
					<Route path="new" element={<NewProducts />} />
				</Route>
				<Route path="users" element={<Users />} >
					<Route path=":userId" element={<UserDetails />} />
					<Route path="admin" element={<AdminUser />} />
				</Route>
				<Route 
					path="profile" 
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<NoMatch />}></Route>
			</Routes>
		</AuthProvider>
  );
}

export default App;
