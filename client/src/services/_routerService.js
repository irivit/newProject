// routes
import Dashboard from "../routes/dashboard";

// async component
import {
  AsyncProfileComponent,
  AsyncClientDashboardComponent,

  AsyncCompanyDashboardComponent
} from "../components/AsyncComponent/AsyncComponent";

export default [
  {
    path: "dashboard",
    component: AsyncCompanyDashboardComponent
  },
  {
    path: "profile",
    component: AsyncProfileComponent
  },
  {
    path: "client",
    component: AsyncClientDashboardComponent
  },

]