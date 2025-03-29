// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Todo {
        uint id;
        string text;
        bool completed;
    }

    mapping(uint => Todo) public todos; // Store todos in a mapping
    uint256 public nextId = 1; // Start IDs from 1

    event TodoCreated(uint id, string text, bool completed);
    event TodoToggled(uint id, bool completed);

    function createTodo(string memory _text) public {
        todos[nextId] = Todo(nextId, _text, false);
        emit TodoCreated(nextId, _text, false);
        nextId++; // Increment ID
    }

    function toggleTodoCompleted(uint id) public {
        require(id > 0 && id < nextId, "Todo not found"); // Ensure valid ID
        todos[id].completed = !todos[id].completed;
        emit TodoToggled(id, todos[id].completed);
    }

    function getTodos() public view returns (Todo[] memory) {
        Todo[] memory todoArray = new Todo[](nextId - 1);
        for (uint i = 1; i < nextId; i++) {
            todoArray[i - 1] = todos[i];
        }
        return todoArray;
    }
}
