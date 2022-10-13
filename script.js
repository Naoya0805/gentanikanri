//問題文をオリジナルに書き換え
const quiz = [
    {
      question: '製造課が日々管理している費目として適切でないものはどれか',
      answers: [ '労務費', '工具費', '素材費', '購入部品費'],
      correct: '購入部品費'
    }, {
      question: '製造課が日々管理している費目の総称をトヨタでは何と呼んでいるか',
      answers: [ '生産経費', '直管費', '生産費', '製造管理費'],
      correct: '直管費'
    }, {
      question: '直管費改善のアプローチとして適切でないものはどれか',
      answers: [ '油脂の使用量を減らすため、設備からの油の持ち出し対策を実施', '少しでも安く買いたいので、仕入先に直接価格交渉', '刃具の寿命延長を狙い、加工条件の変更に着手', '出荷キャップの再生品(安価品)利用を積極的に実施'],
      correct: '少しでも安く買いたいので、仕入先に直接価格交渉'
    }
    , {
      question: '直管費の予算付与の考え方として正しいものはどれか',
      answers: [ '年初に当年度分をまとめて工場原価で算出、付与', '年初に当年度分を製造部から申請、工場原価にて付与', '日々、操業度に応じてシステムで自動付与', '生産台数を基に、次月分予算がシステムにて自動付与'],
      correct: '日々、操業度に応じてシステムで自動付与'
    }
    , {
      question: '直管費の予算計算式は予算係数×操業度で算出するが、予算係数の説明として適切でないものはどれか',
      answers: [ '予算係数とは操業度当たりの使用量や金額のことであり、原単位管理の基準となる', '予算係数は品番別や機番別で設定される', '特別な事情が無い限り、期中での予算係数見直しは実施しない', '予算に不足があった場合、期中でも予算係数を見直すことが出来る'],
      correct: '予算に不足があった場合、期中でも予算係数を見直すことが出来る'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    
  //while文をforループ文に変更
    for(let i = 0 ; i < buttonLen ; i++ ){
      $buttons[i].textContent = quiz[quizCount].answers[i];
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  //全問正解したら合格、1問でも間違えたら不合格にする
  //点数表記
  const showEnd = () => {
    if (score === quizLen) {
    $question.textContent = 'あなたを原価Gにスカウトします！スコアは' + Math.round( score / quizLen * 100 ) + '点です';
    } else {
    $question.textContent = 'ちゃんと勉強してください!! あなたのスコアは' + Math.round( score / quizLen * 100) + '点です';
      }
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }

$(window).on("load", function () {
    $(".js_trigger_sample").on("click", function () {
      var elm = $($(this).parent()).find(".default"), tmp = $(this).attr("src");
      elm.addClass("active");
      elm.removeClass("default");
      elm.find("img").attr("src", tmp)
    });
});
