using Bunit;
using Microsoft.Extensions.DependencyInjection;
using SiemensIXBlazor.Components.Modal;
using SiemensIXBlazor.Tests;
using Xunit;

namespace SiemensIXBlazor.Tests.Modal
{
    public class ModalLoadingTest : TestContextBase
    {
        [Fact]
        public void ModalLoading_ShouldRenderBasicProperties()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>(parameters => parameters
                .Add(p => p.Id, "test-modal-loading")
                .Add(p => p.Class, "custom-class")
                .Add(p => p.Style, "color: red;")
            );

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.NotNull(element);
            Assert.Equal("test-modal-loading", element.GetAttribute("id"));
            Assert.Contains("custom-class", element.GetAttribute("class") ?? "");
            Assert.Equal("color: red;", element.GetAttribute("style"));
        }

        [Fact]
        public void ModalLoading_ShouldRenderDefaultText()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>();

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.Equal("Loading...", element.GetAttribute("text"));
        }

        [Fact]
        public void ModalLoading_ShouldRenderCustomText()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>(parameters => parameters
                .Add(p => p.Text, "Please wait...")
            );

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.Equal("Please wait...", element.GetAttribute("text"));
        }

        [Fact]
        public void ModalLoading_ShouldRenderEmptyText()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>(parameters => parameters
                .Add(p => p.Text, "")
            );

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.Equal("", element.GetAttribute("text"));
        }

        [Fact]
        public void ModalLoading_ShouldRenderWithoutProperties()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>();

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.NotNull(element);
            Assert.Equal("Loading...", element.GetAttribute("text"));
        }

        [Fact]
        public void ModalLoading_ShouldApplyCssClass()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>(parameters => parameters
                .Add(p => p.Class, "test-class loading-class")
            );

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.Contains("test-class", element.GetAttribute("class") ?? "");
            Assert.Contains("loading-class", element.GetAttribute("class") ?? "");
        }

        [Fact]
        public void ModalLoading_ShouldApplyStyleAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<ModalLoading>(parameters => parameters
                .Add(p => p.Style, "text-align: center; font-size: 16px;")
            );

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.Equal("text-align: center; font-size: 16px;", element.GetAttribute("style"));
        }

        [Fact]
        public void ModalLoading_ShouldRenderLongText()
        {
            // Arrange
            var longText = "This is a very long loading message that might wrap to multiple lines and should be handled properly by the component";

            // Act
            var component = RenderComponent<ModalLoading>(parameters => parameters
                .Add(p => p.Text, longText)
            );

            // Assert
            var element = component.Find("ix-modal-loading");
            Assert.Equal(longText, element.GetAttribute("text"));
        }
    }
}
