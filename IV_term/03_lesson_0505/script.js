let Column1 = [
    'Коллеги!',
    'Помните, как помнит блокчен, что',
    'Опыт майнинга говорит о том, что',
    'Вот почему',
    'Как показывает практика разработки',
    'Из чего следует, что ',
    'Господа Айтишники!',
    'С другой стороны',
    'Поэтому',
    'И, тем не менее,'
];
let Column2 = [
    'криптографические схемы',
    'держатели токенов',
    'частые хард-форки',
    'надежная система генерации случайностей',
    'хэш-функции',
    'уникальные приватные ключи',
    'прогрессивные майнинговые пулы',
    'доступность ICO',
    'постоянное шифрование',
    'детальная програботка white paper'
];
let Column3 = [
    'подтверждают транзакцию согласно алгоритму',
    'ставят под сомнение возможность консесуса для',
    'способствуют дальнейшей популяризации',
    'обеспечивают непревзойденный уровень безопасности',
    'проводят двухфакторную аутентификацию в интересах',
    'позволяют решать актуальные проблемы',
    'представляют собой результат вычисления',
    'систематизируют данные по критериям',
    'провоцирует неизбежные потери',
    'требуют подтверждения валидности'
];
let Column4 = [
    'вычисления новых блоков.',
    'соблюдения сценариев смарт-контрактов.',
    'структуры распределенного реестра.',
    'деревьев Меркля.',
    'глобальной финтех индустрии.',
    'абсолютного большинства участников цепи.',
    'биткоина и эфириума.',
    'децентрализованной системы управления.',
    'иерархических кошельков.',
    'растущих комиссий за транзакции.'
];

function generate() {
    let rand = Math.floor(Math.random() * 10);

    let f_p = Column1[rand];
    let s_p = Column2[rand];
    let t_p = Column3[rand];
    let ff_p = Column4[rand];

    let result = f_p + ' ' + s_p + ' ' + t_p + ' ' + ff_p;

    document.getElementById('phrase').innerHTML = result;
}
