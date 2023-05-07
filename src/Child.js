import React, { useEffect, useState } from "react";
import './Main.css'

function Child({ duk_tsa, hsb_bow, hsb_lng, lng_hsb, nan_hsb, swb_ful, swb_sgi, swb_tsa, tsa_duk, tsa_sgi, tsa_swb }) {
    let heads = function () {
        return (
            <tr>
                <th>Departure Times</th>

                <th>Passenger</th>

                <th>Vehicle</th>
            </tr>
        );
    };

    return (
        <>
            <thead>{heads()}</thead>

            <tbody>
                {duk_tsa}

                {hsb_bow}

                {hsb_lng}

                {lng_hsb}

                {nan_hsb}

                {swb_ful}

                {swb_sgi}

                {swb_tsa}

                {tsa_duk}

                {tsa_sgi}

                {tsa_swb}

            </tbody>
        </>
    );
}

export default Child;