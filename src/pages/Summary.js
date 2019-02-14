import React from 'react';
import { Link } from '@reach/router';

const determineResult = ({ questions, answers }) => {
  return questions.map((question, index) => {
    const answer = answers[index];
    const res = {
      correct: answer === question.correctAnswer,
      answer,
      ...question,
    };

    return res;
  });
};

const greetings = [
  'Det viktigaste är inte att vinna',
  'Du kanske ska läsa lite flitigare',
  'Mer än hälften rätt!',
  'Nästan alla rätt, bra jobbat!',
  'Är du anställd på tidningen eller?!',
];

const Answer = ({ correct, phrase, answer, correctAnswer, url }) => {
  const [beginning, end] = phrase.split('{gap}');

  let gap;
  if (correct) {
    gap = <span>{answer}</span>;
  } else {
    gap = (
      <span>
        <del>{answer}</del> {correctAnswer}
      </span>
    );
  }

  return (
    <li>
      <a href={url}>
        <span>{beginning}</span>
        {gap}
        <span>{end}</span>
      </a>
    </li>
  );
};

const Summary = props => {
  const { questions, answers } = props.location.state;
  if (!answers || !questions) props.location.navigate('/');

  const result = determineResult({ questions, answers });
  const score = result.filter(r => r.correct).length;
  const greeting = greetings[score - 1];

  return (
    <>
      <h2>{greeting}</h2>
      <div>
        {score}/{result.length}
      </div>
      <div>
        <Link to="/questions">Testa igen</Link>
      </div>
      <div>
        <h3>Resultat</h3>
        <ul>
          {result.map(res => (
            <Answer key={res.id} {...res} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Summary;
