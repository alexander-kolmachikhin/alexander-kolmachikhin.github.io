class Fragment {
        
      constructor(layout) {
          this.view = document.createElement("div");
          this.view.innerHTML = layout;
      }

      find(id) {
          return this.view.querySelector(`#${id}`);
      }

      add(container) {
          container.appendChild(this.view);
      }

      remove() {
          this.view.parentNode.removeChild(this.view);
      }

  }
