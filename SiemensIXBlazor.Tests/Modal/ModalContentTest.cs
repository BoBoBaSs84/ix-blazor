using Bunit;
using Microsoft.Extensions.DependencyInjection;
using SiemensIXBlazor.Components.Modal;
using SiemensIXBlazor.Tests;
using Xunit;

namespace SiemensIXBlazor.Tests.Modal
{
    public class ModalContentTest : TestContextBase
    {
        [Fact]
        public void ModalContent_ShouldRenderBasicProperties()
        {
            // Arrange & Act
            var component = RenderComponent<ModalContent>(parameters => parameters
                .Add(p => p.Id, "test-modal-content")
                .Add(p => p.Class, "custom-class")
                .Add(p => p.Style, "color: red;")
            );

            // Assert
            var element = component.Find("ix-modal-content");
            Assert.NotNull(element);
            Assert.Equal("test-modal-content", element.GetAttribute("id"));
            Assert.Contains("custom-class", element.GetAttribute("class") ?? "");
            Assert.Equal("color: red;", element.GetAttribute("style"));
        }

        [Fact]
        public void ModalContent_ShouldRenderChildContent()
        {
            // Arrange & Act
            var component = RenderComponent<ModalContent>(parameters => parameters
                .AddChildContent("<p>Modal content text</p>")
            );

            // Assert
            var element = component.Find("ix-modal-content");
            Assert.Contains("Modal content text", element.InnerHtml);
        }

        [Fact]
        public void ModalContent_ShouldRenderWithoutProperties()
        {
            // Arrange & Act
            var component = RenderComponent<ModalContent>();

            // Assert
            var element = component.Find("ix-modal-content");
            Assert.NotNull(element);
        }

        [Fact]
        public void ModalContent_ShouldApplyCssClass()
        {
            // Arrange & Act
            var component = RenderComponent<ModalContent>(parameters => parameters
                .Add(p => p.Class, "test-class another-class")
            );

            // Assert
            var element = component.Find("ix-modal-content");
            Assert.Contains("test-class", element.GetAttribute("class") ?? "");
            Assert.Contains("another-class", element.GetAttribute("class") ?? "");
        }

        [Fact]
        public void ModalContent_ShouldApplyStyleAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<ModalContent>(parameters => parameters
                .Add(p => p.Style, "background-color: blue; margin: 10px;")
            );

            // Assert
            var element = component.Find("ix-modal-content");
            Assert.Equal("background-color: blue; margin: 10px;", element.GetAttribute("style"));
        }
    }
}
