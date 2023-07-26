import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Detail from "./pages/detail/detail";
import EditFeedback from "./pages/edit feedback/editFeedback";
import Homepage from "./pages/homepage/homepage";
import NewFeedback from "./pages/new feedback/newFeedback";

const router = createBrowserRouter([
	{
		path: "/Explorer-Product-Feedback-React-Ts/",
		element: <Homepage />,
	},
	{
		path: "/Explorer-Product-Feedback-React-Ts/new",
		element: <NewFeedback />,
	},
	{path: "/Explorer-Product-Feedback-React-Ts/detail/:id", element: <Detail />},
	{path: "/Explorer-Product-Feedback-React-Ts/edit/:id", element: <EditFeedback />},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
