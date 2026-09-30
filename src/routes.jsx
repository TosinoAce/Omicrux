import { lazy } from "react";
import App from "./App.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Shared by the browser (main.jsx) and the build-time pre-renderer (entry-server.jsx).
// Only the home page ships in the main bundle; the rest load on demand.
export const pageImports = {
  about: () => import("./pages/AboutPage.jsx"),
  blog: () => import("./pages/BlogPage.jsx"),
  blogPost: () => import("./pages/BlogPostPage.jsx"),
  contact: () => import("./pages/ContactPage.jsx"),
  services: () => import("./pages/ServicesPage.jsx"),
  serviceDetail: () => import("./pages/ServiceDetailPage.jsx"),
  privacy: () => import("./pages/PrivacyPage.jsx"),
};
const AboutPage = lazy(pageImports.about);
const BlogPage = lazy(pageImports.blog);
const BlogPostPage = lazy(pageImports.blogPost);
const ContactPage = lazy(pageImports.contact);
const ServicesPage = lazy(pageImports.services);
const ServiceDetailPage = lazy(pageImports.serviceDetail);
const PrivacyPage = lazy(pageImports.privacy);

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/:slug", element: <ServiceDetailPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:slug", element: <BlogPostPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export default routes;
