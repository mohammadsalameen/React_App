// Define the Product interface
interface Product {
    name: string;
    price: number;
  }
  
  // Function to calculate total price
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Function to validate email
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return emailRegex.test(email);
  }
  
  // Example usage
  const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 2.0 },
    { name: "Orange", price: 1.8 },
  ];
  
  const totalPrice = calculateTotalPrice(products);
  console.log(`Total Price: $${totalPrice}`); // Output: Total Price: $5.3
  
  // Validate email example
  const email = "test@example.com";
  if (isValidEmail(email)) {
    console.log(`${email} is a valid email address.`);
  } else {
    console.log(`${email} is not a valid email address.`);
  }
  