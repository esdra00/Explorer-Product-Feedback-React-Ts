import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Detail from "./pages/detail/detail";
import EditFeedback from "./pages/edit feedback/editFeedback";
import Homepage from "./pages/homepage/homepage";
import NewFeedback from "./pages/new feedback/newFeedback";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/new",
		element: <NewFeedback />,
	},
	{path: "/detail/:id", element: <Detail />},
	{path: "/edit/:id", element: <EditFeedback />},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
