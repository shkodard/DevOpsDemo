package ch.zhaw.iwi.devops.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ToDoControllerTest {
    
    @Test
    public void testCreateTodo() {
        ToDoController controller = new ToDoController();
        var todo = new ToDo(1, "t", "d");
        controller.createTodo(1, todo);
        assertEquals(1, controller.count());
        assertEquals(1, controller.todo().size());
    }

    @Test
    void testCount() {
        
    }

    @Test
    void testCreateTodo3() {
        
    }

    @Test
    void testCreateTodo2() {
        
    }

    @Test
    void testDeleteTodo() {
        
    }

    @Test
    void testGetTodo() {
        
    }

    @Test
    void testInit() {
        
    }

    @Test
    void testPing() {
        
    }

    @Test
    void testTest() {
        
    }

    @Test
    void testTodo() {
        
    }

}
