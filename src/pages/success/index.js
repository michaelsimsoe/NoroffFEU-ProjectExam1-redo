import React from 'react';
import { useSelector } from 'react-redux';

export const JoinSuccessPage = () => {
  const state = useSelector((state) => state);

  const firstName = state.formData.data.join_first_name;

  return (
    <main className="o-join-success-container">
      <article className="b-join-success">
        <h2>Fantastic!</h2>
        <section className="b-join-success__message">
          <h3>
            Thank you for being you,{firstName}
            <span className="b-join-success__message__name"></span>!
          </h3>
          <p>We will be in touch. In the meantime, stay frosty!</p>
        </section>
      </article>
    </main>
  );
};
