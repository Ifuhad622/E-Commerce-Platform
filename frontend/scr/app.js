// Import necessary components from react-router-dom
import { Routes, Route } from 'react-router-dom';
// Other imports...

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;

