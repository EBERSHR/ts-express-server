// import createServer from "./server";
import createServer from "./server";

createServer().listen(3000, () => {
    console.log('Server running on port 3000');
});