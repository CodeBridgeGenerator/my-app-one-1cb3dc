import React from "react";
import { render, screen } from "@testing-library/react";

import WarehouseEditDialogComponent from "../WarehouseEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders warehouse edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WarehouseEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("warehouse-edit-dialog-component")).toBeInTheDocument();
});
