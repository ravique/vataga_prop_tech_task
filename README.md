# Общие требования

* Для стилей использовать styled-components, для API-вызовов — axios
* Писать всё на TypeScript — обязательно
* Не использовать никакие дополнительные библиотеки (кроме тех, что уже есть в проекте и указанных выше)
* Предполагается, что выполнение займет не более 4 ч
* Результат выполнения выложить в репозиторий

Это почти чистый create-react-app typescript проект — за исключением того, что тут в главном файле добавлен запрос. В 
ответ на него отдаются данные, которые и надо показывать, фильтровать и сортировать.

При выполнении задачи структура проекта крайне важна. Суть задачи не в том, чтобы проверить, сможете ли вы выполнить её 
за отведенное время, а в том, сможете ли вы выполнить её качественно, с хорошей структурой проекта и кодом, 
оптимальными решениями, и при этом уложиться в уделенное время.

Макет GUI к задаче:
https://www.figma.com/file/QAEFeigFX3ezno66s3neHv/Frontend-Task?node-id=1%3A986

Стили добавить по минимуму — не стоит пытаться реализовать GUI точь-в-точь, как в фигме (но если останется на это время, то будет круто).
Фигма используется в первую очередь для того, чтобы было понятно, как показывать таблицу, сортировку, пагинацию, и, конечно же, чтобы 
брать иконки — их берём как svg-код, скачивать из макета ничего не нужно.

## Минимальная версия проекта

Тут всё просто: сделать таблицу и пагинацию, желательно с минимальными стилями для адекватного отображения страницы.

## Дополнительные задачи

* **Сделать сортировку по полям.** Сортировку сделать по всем столбцам, которые есть в таблице. Обычные сортировки ASC, DESC, логика идентичная для всех. При нажатии на верхнюю стрелку идёт DESC, на нижнюю ASC.
* **Сделать фильтрацию по полям HTTPS, CORS.** Для этого надо добавить над таблицей 2 группы checkbox с соответствующими title и checkbox-ами. Для каждого из них есть 4 стейта: (true, false), (true), (false), (none).
