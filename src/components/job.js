import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {props.offer.salary === 1 ? <FormattedMessage id="Million" /> : <FormattedMessage id="MillionP" />}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
      <FormattedNumber
        value={props.offer.views}
        thousandSeparator={true}
      />
    </td>
    </tr>
  );
};

export default Job;
