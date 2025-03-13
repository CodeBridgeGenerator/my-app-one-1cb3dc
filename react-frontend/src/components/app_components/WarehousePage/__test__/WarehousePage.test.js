import React from "react";
import { render, screen } from "@testing-library/react";

import WarehousePage from "../WarehousePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders warehouse page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WarehousePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("warehouse-datatable")).toBeInTheDocument();
    expect(screen.getByRole("warehouse-add-button")).toBeInTheDocument();
});
