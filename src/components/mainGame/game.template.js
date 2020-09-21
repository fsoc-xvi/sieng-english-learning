import {nextCardSVG, previousCardSVG} from '@/assets/inlineSVG';
import {
  rightWordStyles, wrongWordStyles
} from '@/components/mainGame/game.functions';

export function createCards(word = '') {
  return `
    <div class="game__card game__block" data-id="game-card">
        <span data-id="word">${word}</span>
    </div>
    <div class="game__controls">
      <button id="previous-card-SVG" data-id="prev-card">
        ${previousCardSVG}
      </button>
      <button id="next-card-SVG" data-id="next-card">${nextCardSVG}</button>
    </div>
  `
}

export function createLearningWords(word) {
  return `
  <div class="learning-word game__block">
    <div class="learning-word__skip" data-id="skip-word">
      <span class="learning-word__skip-span"
       data-id="skip-word">Пропустить</span>
    </div>
    <div class="learning-word__word">
      <span class="learning-word__word-span" data-id="word">${word}</span>
    </div>
    <div class="game__answer">
        <input data-id="answer-input" type="text" class="game__answer-input"
        placeholder="Введите слово..." onfocus="this.placeholder=''"
         onblur="this.placeholder='Введите слово...'">
      <button class="game__answer-button" data-id="answer-button">Ответ</button>
    </div>
  </div>
  `
}

export function createResult(progress) {
  const count = progress.right + progress.wrong
  const rightWidth = progress.right/count*100
  const wrongWidth = progress.wrong/count*100
  return `
    <div class="result game__block">
      <div class="result__column">
        <div class="result__body">
          <div class="right">
            <div class="right__progress"> 
                <div class="right__progress-active"
                style=${rightWordStyles(rightWidth+'%')}>    
                </div>
            </div>
            <div class="right__description">
              <div class="right__title">Правильно</div>
              <div class="right__count">${progress.right}</div>
            </div>
          </div>
          <div class="wrong">
            <div class="wrong__progress">
                <div class="wrong__progress-active"
                style=${wrongWordStyles(wrongWidth+'%')}></div>
            </div>
            <div class="wrong__description">
              <div class="wrong__title">Неправильно</div>
              <div class="wrong__count">${progress.wrong}</div>
            </div>
          </div>
        </div>
        <div class="result__restart">
          <button data-id="start-again" class="result__restart-button">
            Начать сначала
          </button>
        </div>
      </div>                    
    </div>
  `
}
