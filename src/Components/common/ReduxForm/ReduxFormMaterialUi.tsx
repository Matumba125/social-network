import {Checkbox, TextField} from "@material-ui/core";
import React from "react";

export const RenderTextField = ({
                                    input,
                                    label,
                                    ...custom
                                }: any) => (<TextField {...input}{...custom}/>)

export const renderCheckbox = ({input}: any) => (
    <Checkbox
        color={'primary'}
    />
)