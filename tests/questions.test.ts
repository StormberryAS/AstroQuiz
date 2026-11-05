// The question bank as the page loads it: the compiled questions.js, read through the package's
// "#questions.js" import, typed by ts/questions.ts. The counts are the README's (Features).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questions } from '#questions.js';

const count = (key: 'difficulty' | 'topic'): Record<string, number> => {
  const out: Record<string, number> = {};
  for (const q of questions) out[q[key]] = (out[q[key]] ?? 0) + 1;
  return out;
};

test('100 questions, ids 1 to 100 in order, each id once', () => {
  assert.equal(questions.length, 100);
  assert.deepEqual(questions.map((q) => q.id), Array.from({ length: 100 }, (_, i) => i + 1));
  assert.equal(new Set(questions.map((q) => q.id)).size, 100);
});

test('every question has the seven fields, text in each, four different options and a valid answer', () => {
  for (const q of questions) {
    const at = `question ${q.id}`;
    assert.deepEqual(Object.keys(q), ['id', 'question', 'options', 'answer', 'explanation', 'difficulty', 'topic'], at);
    assert.ok(Number.isInteger(q.id) && q.id > 0, at);
    for (const text of [q.question, q.explanation, ...q.options]) assert.ok(typeof text === 'string' && text.trim() === text && text.length > 0, at);
    assert.equal(q.options.length, 4, at);
    assert.equal(new Set(q.options).size, 4, `${at}: the options differ`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3, at);
  }
});

test('three tiers: 38 easy, 42 medium, 20 hard', () => {
  assert.deepEqual(count('difficulty'), { easy: 38, medium: 42, hard: 20 });
});

test('the eleven topics the README names, and no other', () => {
  assert.deepEqual(Object.keys(count('topic')).sort(), [
    'Constellations', 'Cosmology', 'Exoplanets', 'Galaxies', 'History', 'Phenomena', 'Physics',
    'Solar System', 'Space missions', 'Stars', 'Telescopes',
  ]);
});
